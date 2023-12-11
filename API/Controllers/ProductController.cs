using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly StoreContext context;
        
        public ProductController(StoreContext context)
        {
            this.context = context;
        }
        
        [HttpGet]
        public ActionResult<List<Product>> GetProduct()
        {
            var products= context.Products.ToList();
            return Ok(products);
        }
        [HttpGet("{id}")] //api/products/3
        public ActionResult<Product> GetProduct(int id){
            return context.Products.Find(id);
        }
    }
}