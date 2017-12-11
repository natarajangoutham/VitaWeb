using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Lending.Core.Service.Models
{
    public class CustomerPhoneModel
    {
        public long CustomerPhoneId { get; set; }
        public long CustomerId { get; set; }
        public short PhoneTypeId { get; set; }
        public string PhoneNumber { get; set; }
        public string PhoneNumberListedAs { get; set; }
    }
}