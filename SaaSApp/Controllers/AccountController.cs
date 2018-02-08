using Microsoft.AspNet.Identity;
using SaaSApp.Identity;
using System;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using Entities;

namespace SaaSApp.Controllers
{
    [RoutePrefix("api/Account")]
    public class AccountController : BaseApiController
    {
        [Authorize]
        [Route("users")]
        public IHttpActionResult GetUsers()
        {
            return Ok(this.AppUserManager.Users.ToList().Select(u => this.TheModelFactory.Create(u)));
        }

        [Authorize]
        [Route("user/{id:guid}", Name = "GetUserById")]
        public async Task<IHttpActionResult> GetUser(string Id)
        {
            var user = await this.AppUserManager.FindByIdAsync(Id);

            if (user != null)
            {
                return Ok(this.TheModelFactory.Create(user));
            }

            return NotFound();

        }

        [Authorize]
        [Route("user/{username}")]
        public async Task<IHttpActionResult> GetUserByName(string username)
        {
            var user = await this.AppUserManager.FindByNameAsync(username);

            if (user != null)
            {
                return Ok(this.TheModelFactory.Create(user));
            }

            return NotFound();

        }

        [AllowAnonymous]
        [Route("Register")]
        public async Task<IHttpActionResult> Register(UserModel userModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {

                var user = new ApplicationUser()
                {
                    UserName = userModel.Email,
                    Email = userModel.Email,
                    FirstName = string.Empty,
                    LastName = string.Empty,
                    JoinDate = DateTime.Now.Date,
                };

                IdentityResult addUserResult = await this.AppUserManager.CreateAsync(user, userModel.Password);
                if (!addUserResult.Succeeded)
                {
                    return GetErrorResult(addUserResult);
                }

                //The call back URL is stored in the database. This makes it easy to switch between DEV/UAT/PROD
                //string Proc = "dbo.sp_AppSettingsGetByName";
                //DynamicParameters param = new DynamicParameters();
                //param.Add("@Name", "ANGULAR_CONFIRM_REGISTRATION_URL", dbType: DbType.String, direction: ParameterDirection.Input);
                //IEnumerable<AppSettings> settings = DatabaseGet.AppSettingsGet(param, Proc);
                //if (settings == null)
                //    throw new ArgumentNullException("settings");
                //if (settings.Count() == 0)
                //    throw new Exception("Invalid settings count");

                string code = await AppUserManager.GenerateEmailConfirmationTokenAsync(user.Id);
                code = HttpUtility.UrlEncode(code);

                //NameValueCollection queryString = HttpUtility.ParseQueryString(string.Empty);
                //queryString["userId"] = user.Id;
                //queryString["code"] = code;
                //string callbackUrl = settings.FirstOrDefault().Value + queryString.ToString();
                string callbackUrl = string.Empty;

                await AppUserManager.SendEmailAsync(user.Id, "Confirm your account", "Please confirm your account by clicking <a href=\"" + callbackUrl + "\">here</a>");
                Uri locationHeader = new Uri(Url.Link("GetUserById", new { id = user.Id }));
                return Created(locationHeader, TheModelFactory.Create(user));
            }
            catch (Exception ex)
            {
                ModelState.AddModelError("", ex.Message);
                return BadRequest(ModelState);
            }
        }

        [AllowAnonymous]
        [Route("ConfirmEmail")]
        public async Task<IHttpActionResult> ConfirmEmail(ConfirmEmail confirm)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {

                string code = HttpUtility.UrlDecode(confirm.Code);
                string userID = confirm.UserID;
                IdentityResult result = await this.AppUserManager.ConfirmEmailAsync(userID, code);

                if (!result.Succeeded)
                {
                    return GetErrorResult(result);
                }
            }
            catch (Exception ex)
            {
                ModelState.AddModelError("", ex.Message);
                return BadRequest(ModelState);
            }

            return Ok();
        }

        [AllowAnonymous]
        [HttpGet]
        [Route("ChangePasswordRequest")]
        public async Task<IHttpActionResult> ChangePasswordRequest(string username)
        {
            if (string.IsNullOrWhiteSpace(username))
            {
                ModelState.AddModelError("", "E-mail is required");
                return BadRequest(ModelState);
            }

            try
            {

                var user = await this.AppUserManager.FindByNameAsync(username);
                if (user == null)
                    return BadRequest();


                //The call back URL is stored in the database. This makes it easy to switch between DEV/UAT/PROD
                //string Proc = "dbo.sp_AppSettingsGetByName";
                //DynamicParameters param = new DynamicParameters();
                //param.Add("@Name", "ANGULAR_CHANGE_PASSWORD_URL", dbType: DbType.String, direction: ParameterDirection.Input);
                //IEnumerable<AppSettings> settings = DatabaseGet.AppSettingsGet(param, Proc);
                //if (settings == null)
                //    throw new ArgumentNullException("settings");
                //if (settings.Count() == 0)
                //    throw new Exception("Invalid settings count");


                string code = await AppUserManager.GeneratePasswordResetTokenAsync(user.Id);
                code = HttpUtility.UrlEncode(code);

                //NameValueCollection queryString = HttpUtility.ParseQueryString(string.Empty);
                //queryString["userId"] = user.Id;
                //queryString["code"] = code;
                //string callbackUrl = settings.FirstOrDefault().Value + queryString.ToString();
                string callbackUrl = "test";
                await this.AppUserManager.SendEmailAsync(user.Id, "Password Reset", "Reset your password by clicking <a href=\"" + callbackUrl + "\">here</a>");

                return Ok();
            }
            catch (Exception ex)
            {
                ModelState.AddModelError("", ex.Message);
                return BadRequest(ModelState);
            }
        }

        [Route("ResetPassword")]
        public async Task<IHttpActionResult> ResetPassword(ChangePassword model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                string code = HttpUtility.UrlDecode(model.Code);
                string userID = model.UserID;
                IdentityResult result = await this.AppUserManager.ResetPasswordAsync(userID, code, model.NewPassword);

                if (!result.Succeeded)
                {
                    return GetErrorResult(result);
                }
            }
            catch (Exception ex)
            {
                ModelState.AddModelError("", ex.Message);
                return BadRequest(ModelState);
            }

            return Ok();
        }
    }
}