using System;
using HotChocolate.Language;
using HotChocolate.Types;

namespace Meetup.Pet.Api.Gateway
{
    public sealed class UploadScalarType : ScalarType
    {
        public UploadScalarType()
            : base("Upload")
        {
        }

        // define which .NET type represents your type
        public override Type ClrType { get; } = typeof(string);

        // define which literals this type can be parsed from.
        public override bool IsInstanceOfType(IValueNode literal)
        {
            if (literal == null)
            {
                throw new ArgumentNullException(nameof(literal));
            }

            return literal is StringValueNode
                || literal is NullValueNode;
        }

        // define how a literal is parsed to the native .NET type.
        public override object ParseLiteral(IValueNode literal)
        {
            if (literal == null)
            {
                throw new ArgumentNullException(nameof(literal));
            }

            if (literal is StringValueNode stringLiteral)
            {
                return stringLiteral.Value;
            }

            if (literal is NullValueNode)
            {
                return null;
            }

            throw new ArgumentException(
                "The string type can only parse string literals.",
                nameof(literal));
        }

        // define how a native type is parsed into a literal,
        public override IValueNode ParseValue(object value)
        {
            if (value == null)
            {
                return new NullValueNode(null);
            }

            if (value is string s)
            {
                return new StringValueNode(null, s, false);
            }

            if (value is char c)
            {
                return new StringValueNode(null, c.ToString(), false);
            }

            throw new ArgumentException(
                "The specified value has to be a string or char in order " +
                "to be parsed by the string type.");
        }

        // define the result serialization. A valid output must be of the following .NET types:
        // System.String, System.Char, System.Int16, System.Int32, System.Int64,
        // System.Float, System.Double, System.Decimal and System.Boolean
        public override object Serialize(object value)
        {
            if (value == null)
            {
                return null;
            }

            if (value is string s)
            {
                return s;
            }

            if (value is char c)
            {
                return c;
            }

            throw new ArgumentException(
                "The specified value cannot be serialized by the StringType.");
        }

        public override bool TryDeserialize(object serialized, out object value)
        {
            if (serialized is null)
            {
                value = null;
                return true;
            }

            if (serialized is string s)
            {
                value = s;
                return true;
            }

            value = null;
            return false;
        }
    }
}
