using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Lending.Core.Service.Models;
using System.Web.Http;

namespace Lending.Core.Service.Controllers.Customer
{
    [Route("api/Customers")]
    public class CustomerController : ApiController
    {
        private static List<CustomerModel> customerCollection;

        static CustomerController()
        {
            customerCollection = new List<CustomerModel>()
            {
                new CustomerModel()
                {
                    CustomerId = 1,
                    FirstName = "Yogesh",
                    LastName = "Kadalgikar",
                    DateOfBirth = new DateTime(1980, 3, 9),
                    LanguageId = 1
                }
            };
        }

        // GET api/values
        [HttpGet]
        public IEnumerable<CustomerModel> Get()
        {
            return customerCollection;
        }

        // GET api/values/5
        [HttpGet]
        public CustomerModel Get(long id)
        {
            return customerCollection.Where(c => c.CustomerId.Equals(id)).FirstOrDefault();
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]CustomerModel value)
        {
            customerCollection.Add(value);
        }

        // PUT api/values/5
        [HttpPut]
        public void Put(long id, [FromBody]CustomerModel value)
        {
            if (customerCollection.Any(c => c.CustomerId.Equals(id)))
            {
                CustomerModel updateModel = customerCollection.Where(c => c.CustomerId.Equals(id)).First();
                updateModel.FirstName = value.FirstName;
                updateModel.LastName = value.LastName;
                updateModel.DateOfBirth = value.DateOfBirth;
                updateModel.LanguageId = value.LanguageId;
            }
            else
            {
                value.CustomerId = id;
                customerCollection.Add(value);
            }
        }

        // DELETE api/values/5
        [HttpDelete]
        public void Delete(int id)
        {
            CustomerModel deleteModel = customerCollection.Where(c => c.CustomerId.Equals(id)).FirstOrDefault();
            if (deleteModel != null)
                customerCollection.Remove(deleteModel);
        }
    }
}
