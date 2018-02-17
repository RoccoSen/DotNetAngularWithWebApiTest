using System;
using System.Data;
using Dapper;

namespace Database
{
    public static class DatabaseUpdate
    {
        public static void Update(DynamicParameters p, string StoredProc)
        {
            if (p == null)
                throw new ArgumentNullException("DynamicParameters p");
            else if (string.IsNullOrEmpty(StoredProc))
                throw new ArgumentNullException("StoredProc");

            using (var sqlConnection = SqlConnectionManager.GetConnection())
            {
                sqlConnection.Open();
                sqlConnection.Execute(StoredProc, p, commandType: CommandType.StoredProcedure);
                sqlConnection.Close();
            }

        }

        public static T UpdateScalar<T>(DynamicParameters p, string StoredProc)
        {
            if (p == null)
                throw new ArgumentNullException("DynamicParameters p");
            else if (string.IsNullOrEmpty(StoredProc))
                throw new ArgumentNullException("StoredProc");

            using (var sqlConnection = SqlConnectionManager.GetConnection())
            {
                sqlConnection.Open();
                var returnVal = sqlConnection.ExecuteScalar<T>(StoredProc, p, commandType: CommandType.StoredProcedure);
                sqlConnection.Close();

                return returnVal;
            }

        }
    }
}
