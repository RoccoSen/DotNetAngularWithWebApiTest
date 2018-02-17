using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.DB
{
    public class AppSettings
    {
        public int? SettingsID { get; set; }
        public string Name { get; set; }
        public string Value { get; set; }
        public bool? IsActive { get; set; }
    }
}
