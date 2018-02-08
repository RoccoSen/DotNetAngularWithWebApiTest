using System.ComponentModel.DataAnnotations;

namespace Entities
{
    public class ConfirmEmail
    {
        [Required]
        [Display(Name = "UserID")]
        public string UserID { get; set; }

        [Required]
        [Display(Name = "Code")]
        public string Code { get; set; }
    }
}