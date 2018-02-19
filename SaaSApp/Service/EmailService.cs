using Microsoft.AspNet.Identity;
using System.Configuration;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
namespace SaaSApp.Service
{
    public class EmailService : IIdentityMessageService
    {
        public async Task SendAsync(IdentityMessage message)
        {
            await configSendGridasync(message);
        }

        // Use NuGet to install SendGrid (Basic C# client lib) 
        private async Task configSendGridasync(IdentityMessage message)
        {
            SmtpClient client = new SmtpClient();
            client.Port = 587;
            client.Host = "smtp.sendgrid.net";
            client.Timeout = 10000;
            client.DeliveryMethod = SmtpDeliveryMethod.Network;
            client.UseDefaultCredentials = false;
            var credentials = new NetworkCredential(ConfigurationManager.AppSettings["emailService:Account"],
                                        ConfigurationManager.AppSettings["emailService:Password"]);
            client.Credentials = credentials;


            var myMessage = new MailMessage();
            myMessage.To.Add(message.Destination);
            myMessage.From = new System.Net.Mail.MailAddress("support@test.com", "support@test.com");
            myMessage.Subject = message.Subject;
            myMessage.Body = message.Body;

            await client.SendMailAsync(myMessage);
        }

        public async Task SendEmailAsync(string from, string to, string subject, string message)
        {

            SmtpClient client = new SmtpClient();
            client.Port = 587;
            client.Host = "smtp.sendgrid.net";
            client.Timeout = 10000;
            client.DeliveryMethod = SmtpDeliveryMethod.Network;
            client.UseDefaultCredentials = false;
            var credentials = new NetworkCredential(ConfigurationManager.AppSettings["emailService:Account"],
                                        ConfigurationManager.AppSettings["emailService:Password"]);
            client.Credentials = credentials;


            var myMessage = new MailMessage();
            myMessage.To.Add(to);
            myMessage.From = new System.Net.Mail.MailAddress(from);
            myMessage.Subject = subject;
            myMessage.Body = message;

            await client.SendMailAsync(myMessage);
        }

        public async Task SendEmailAsyncHtml(string from, string to, string subject, string html)
        {
            SmtpClient client = new SmtpClient();
            client.Port = 587;
            client.Host = "smtp.sendgrid.net";
            client.Timeout = 10000;
            client.DeliveryMethod = SmtpDeliveryMethod.Network;
            client.UseDefaultCredentials = false;
            var credentials = new NetworkCredential(ConfigurationManager.AppSettings["emailService:Account"],
                                        ConfigurationManager.AppSettings["emailService:Password"]);
            client.Credentials = credentials;


            var myMessage = new MailMessage();
            myMessage.To.Add(to);
            myMessage.From = new System.Net.Mail.MailAddress(from);
            myMessage.Subject = subject;
            myMessage.Body = html;

            await client.SendMailAsync(myMessage);
        }
    }
}