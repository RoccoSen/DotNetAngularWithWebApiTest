﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.DB
{
    public class Organization
    {
        public int? OrgID { get; set; }
        public string OrgName { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public int? PageID { get; set; }
        public string PageRout { get; set; }
        public bool? IsActive { get; set; }
    }
}
