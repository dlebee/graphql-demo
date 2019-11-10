using System;
using HotChocolate.Language;
using HotChocolate.Types;
using Newtonsoft.Json;

namespace Meetup.Pet.Api.Gateway
{
    public sealed class JsonScalarType : ScalarType
    {
        public JsonScalarType()
            : base("JSON")
        {
        }

        public override Type ClrType => typeof(string);

        public override bool IsInstanceOfType(IValueNode literal)
        {
            if (literal == null)
            {
                throw new ArgumentNullException(nameof(literal));
            }

            if (literal is NullValueNode)
            {
                return true;
            }

            if (literal is StringValueNode stringLiteral)
            {
                return true;
            }

            return false;
        }

        public override object ParseLiteral(IValueNode literal)
        {
            if (literal == null)
            {
                throw new ArgumentNullException(nameof(literal));
            }

            if (literal is NullValueNode)
            {
                return null;
            }

            if (literal is StringValueNode stringLiteral)
            {
                return stringLiteral.Value;
            }

            throw new ScalarSerializationException($"Cannot parse literal {Name} {literal} {literal?.GetType()}");
        }

        public override IValueNode ParseValue(object value)
        {
            if (value == null)
            {
                return new NullValueNode(null);
            }

            return new StringValueNode(JsonConvert.SerializeObject(value));
        }

        public override object Serialize(object value)
        {
            if (value == null)
            {
                return null;
            }

            return value;
        }

        public override bool TryDeserialize(object serialized, out object value)
        {
            if (serialized is null)
            {
                value = null;
                return true;
            }

            value = serialized;
            return true;
        }
    }
}
