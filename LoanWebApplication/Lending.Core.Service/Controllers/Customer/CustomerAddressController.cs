using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Lending.Core.Service.Models;
using System.Web.Http;

namespace Lending.Core.Service.Controllers.Customer
{    
    [Route("api/CustomerAddresses")]
    public class CustomerAddressController : ApiController
    {
        private static List<CustomerAddressModel> customerAddressCollection;

        static CustomerAddressController()
        {
            
        }
        
        // GET: api/CustomerAddresses
        [HttpGet]
        public IEnumerable<CustomerAddressModel> Get()
        {
            return new List<CustomerAddressModel>();
        }

        // GET: api/CustomerAddresses/5
        [HttpGet]
        public string Get(int id)
        {
            return "value";
        }
        
        // POST: api/CustomerAddresses
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }
        
        // PUT: api/CustomerAddresses/5
        [HttpPut]
        public void Put(int id, [FromBody]string value)
        {
        }
        
        // DELETE: api/ApiWithActions/5
        [HttpDelete]
        public void Delete(int id)
        {
        }
    }
}
