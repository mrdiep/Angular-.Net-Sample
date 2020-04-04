using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebBanHang.Api.Dto;

namespace WebBanHang.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : ControllerBase
    {

        private readonly ILogger<ProductsController> _logger;

        public ProductsController(ILogger<ProductsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<ProductDto> Get()
        {
            return new List<ProductDto>()
            {
                new ProductDto
                {
                    Id = 0, 
                    Ten = "Quần Jean Size Trẻ em",
                    DienGiai  ="Quần màu đen, ông ngắn",
                    Gia = 20000
                },
                new ProductDto
                {
                    Id = 0,
                    Ten = "Áo Jean Size Trẻ em",
                    DienGiai  ="Áo màu đen, ông ngắn",
                    Gia = 30000
                }
            };
        }
    }
}
