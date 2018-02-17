using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Database
{
    public class SqlConnectionManager
    {
        public static SqlConnection GetConnection()
        {
            string connString = GetConnectionString();
            return new SqlConnection(connString);
        }

        public static string GetConnectionString()
        {
            string environment = ConfigurationManager.AppSettings["Environment"];
            if (string.IsNullOrEmpty(environment))
                throw new Exception("Environment not found, please check config");

            string connString = ConfigurationManager.ConnectionStrings[environment].ConnectionString;
            if (string.IsNullOrEmpty(connString))
                throw new Exception("Connection string not found for Environment");

            return connString;
        }
    }
}
