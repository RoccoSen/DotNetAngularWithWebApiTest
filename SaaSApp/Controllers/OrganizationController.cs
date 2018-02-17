using System.Threading.Tasks;
using System.Web.Http;
using Database;
using Entities.DB;
using Dapper;
using System.Data;

namespace SaaSApp.Controllers
{
    [RoutePrefix("api/Organization")]
    public class OrganizationController : BaseApiController
    {
        [Authorize]
        [HttpGet]
        [Route("OrganizationGet")]
        public async Task<IHttpActionResult> OrganizationGet()
        {
            var user = await this.AppUserManager.FindByNameAsync(User.Identity.Name);
            if (user == null)
            {
                return BadRequest("Invalid Request");
            }

            DynamicParameters p = new DynamicParameters();
            p.Add("@Id", user.Id, dbType: DbType.String, direction: ParameterDirection.Input);
            Organization org = DatabaseGet.GetSingle<Organization>(p, "dbo.sp_OrganizationGet");

            if (org != null)
            {
                return Ok(org);
            }

            return NotFound();

        }
    }
}