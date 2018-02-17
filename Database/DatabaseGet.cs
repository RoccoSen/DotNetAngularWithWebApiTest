using Dapper;
using System.Linq;
using System;
using System.Collections.Generic;
using System.Data;

namespace Database
{
    public class DatabaseGet
    {
        public static IEnumerable<T> GetMany<T>(DynamicParameters p, string StoredProc)
        {
            if (string.IsNullOrEmpty(StoredProc))
                throw new ArgumentNullException("StoredProc");

            IEnumerable<T> returnList;

            using (var sqlConnection = SqlConnectionManager.GetConnection())
            {
                sqlConnection.Open();
                returnList = sqlConnection.Query<T>(StoredProc, p, null, true, 100, CommandType.StoredProcedure);
                sqlConnection.Close();
            }

            return returnList;
        }

        public static T GetSingle<T>(DynamicParameters p, string StoredProc)
        {
            if (string.IsNullOrEmpty(StoredProc))
                throw new ArgumentNullException("StoredProc");

            using (var sqlConnection = SqlConnectionManager.GetConnection())
            {
                sqlConnection.Open();
                var returnVal = sqlConnection.Query<T>(StoredProc, p, commandType: CommandType.StoredProcedure);
                sqlConnection.Close();

                return returnVal.FirstOrDefault();
            }
        }
    }
}
