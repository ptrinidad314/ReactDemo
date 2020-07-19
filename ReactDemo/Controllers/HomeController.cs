using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ReactDemo.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ReactDemo.Controllers
{
    public class HomeController : Controller
    {
        private static readonly IList<CommentModel> _comments;

        static HomeController()
        {
            _comments = new List<CommentModel>
            {
                new CommentModel
                {
                    Id=1,
                    Author = "Daniel Lo Nigros",
                    Text = "Hello from the HomeController ReactJS.NET World!"
                },
                new CommentModel
                {
                    Id=2,
                    Author="Pete Hunts",
                    Text="This is one comments"
                },
                new CommentModel
                {
                    Id=3,
                    Author="Jordan Walkes",
                    Text="This is yet *another* comments"
                }
            };
        }

        [Route("comments")]
        [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
        public ActionResult Comments() 
        {
            return Json(_comments);
        }

        [Route("comments/new")]
        [HttpPost]
        public ActionResult AddComment(CommentModel comment) 
        {
            //create fake id for comment
            comment.Id = _comments.Count + 1;
            _comments.Add(comment);
            return Content("Success :)");
        }

        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }
    }
}
