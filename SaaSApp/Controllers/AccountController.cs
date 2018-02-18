using Microsoft.AspNet.Identity;
using SaaSApp.Identity;
using System;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using Entities;
using Dapper;
using Entities.DB;
using Database;
using System.Data;
using System.Collections.Specialized;
using System.Security.Claims;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.OAuth;

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

                // User has been created, insert a record in the organization table so it's avaiable for updating later
                DynamicParameters pSignup = new DynamicParameters();
                pSignup.Add("@Id", user.Id, dbType: DbType.String, direction: ParameterDirection.Input);
                DatabaseUpdate.Update(pSignup, "dbo.sp_SignUp");


                //The call back URL is stored in the database. This makes it easy to switch between DEV/UAT/PROD
                DynamicParameters pReg = new DynamicParameters();
                pReg.Add("@Name", "CONFIRM_REGISTRATION_URL", dbType: DbType.String, direction: ParameterDirection.Input);
                AppSettings settings = DatabaseGet.GetSingle<AppSettings>(pReg, "dbo.sp_AppSettingsGetByName");
                if (settings == null)
                    throw new ArgumentNullException("settings");


                string code = await AppUserManager.GenerateEmailConfirmationTokenAsync(user.Id);
                code = HttpUtility.UrlEncode(code);

                NameValueCollection queryString = HttpUtility.ParseQueryString(string.Empty);
                queryString["userId"] = user.Id;
                queryString["code"] = code;
                string callbackUrl = settings.Value + queryString.ToString();

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
                DynamicParameters p = new DynamicParameters();
                p.Add("@Name", "CHANGE_PASSWORD_URL", dbType: DbType.String, direction: ParameterDirection.Input);

                AppSettings settings = DatabaseGet.GetSingle<AppSettings>(p, "dbo.sp_AppSettingsGetByName");
                if (settings == null)
                    throw new ArgumentNullException("settings");


                string code = await AppUserManager.GeneratePasswordResetTokenAsync(user.Id);
                code = HttpUtility.UrlEncode(code);

                NameValueCollection queryString = HttpUtility.ParseQueryString(string.Empty);
                queryString["userId"] = user.Id;
                queryString["code"] = code;
                string callbackUrl = settings.Value + queryString.ToString();
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