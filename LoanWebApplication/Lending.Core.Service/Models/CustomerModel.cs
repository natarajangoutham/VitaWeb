using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Lending.Core.Service.Models
{
    public class CustomerModel
    {
        public long CustomerId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public short LanguageId { get; set; }
    }
}