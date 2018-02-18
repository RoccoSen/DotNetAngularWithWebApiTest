using Microsoft.AspNet.Identity;
using SendGrid;
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
            var myMessage = new SendGridMessage();

            myMessage.AddTo(message.Destination);
            myMessage.From = new System.Net.Mail.MailAddress("support@test.com", "support@test.com");
            myMessage.Subject = message.Subject;
            myMessage.Text = message.Body;
            myMessage.Html = message.Body;

            var credentials = new NetworkCredential(ConfigurationManager.AppSettings["emailService:Account"],
                                                    ConfigurationManager.AppSettings["emailService:Password"]);

            // Create a Web transport for sending email.
            var transportWeb = new Web(credentials);

            // Send the email.
            if (transportWeb != null)
            {
                await transportWeb.DeliverAsync(myMessage);
            }
            else
            {
                //Trace.TraceError("Failed to create Web transport.");
                await Task.FromResult(0);
            }
        }

        public async Task SendEmailAsync(string from, string to, string subject, string message)
        {
            var myMessage = new SendGrid.SendGridMessage();
            myMessage.AddTo(to);
            myMessage.From = new MailAddress(from);
            myMessage.Subject = subject;
            myMessage.Text = message;

            var credentials = new NetworkCredential(ConfigurationManager.AppSettings["emailService:Account"],
                                                    ConfigurationManager.AppSettings["emailService:Password"]);

            var transportWeb = new SendGrid.Web(credentials);

            // Send the email.
            if (transportWeb != null)
            {
                await transportWeb.DeliverAsync(myMessage);
            }
            else
            {
                //Trace.TraceError("Failed to create Web transport.");
                await Task.FromResult(0);
            }
        }

        public async Task SendEmailAsyncHtml(string from, string to, string subject, string html)
        {
            var myMessage = new SendGrid.SendGridMessage();
            myMessage.AddTo(to);
            myMessage.From = new MailAddress(from);
            myMessage.Subject = subject;
            myMessage.Html = html;

            var credentials = new NetworkCredential(ConfigurationManager.AppSettings["emailService:Account"],
                                                    ConfigurationManager.AppSettings["emailService:Password"]);

            var transportWeb = new SendGrid.Web(credentials);

            // Send the email.
            if (transportWeb != null)
            {
                await transportWeb.DeliverAsync(myMessage);
            }
            else
            {
                //Trace.TraceError("Failed to create Web transport.");
                await Task.FromResult(0);
            }
        }
    }
}