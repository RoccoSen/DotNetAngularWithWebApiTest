using System.Web;
using System.Web.Optimization;

namespace SaaSApp
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/js/jquery-{version}.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/js/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/js/bootstrap.min.js",
                      "~/js/respond.js",
                      "~/js/fastclick.js",
                      "~/js/nprogress.js",
                      "~/js/bootstrap-wysiwyg.min.js",
                      "~/js/jquery.hotkeys.js",
                      "~/js/prettify.js",
                      "~/js/prettify.min.js",
                      "~/js/custom.min.js"
                      ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/css/bootstrap.min.css",
                      "~/css/maps/jquery-jvectormap-2.0.3.css",
                      "~/css/nprogress.css",                      
                      "~/css/prettify.min.css",
                      "~/css/custom.min.css",
                      "~/css/site.css"));
        }
    }
}
