using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Lending.Core.Service.Models
{
    public class CustomerAddressModel
    {
        public long CustomerAddressId { get; set; }
        public long CustomerId { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string AddressLine3 { get; set; }
        public string City { get; set; }
        public int StateId { get; set; }
        public int CountryId { get; set; }
    }
}