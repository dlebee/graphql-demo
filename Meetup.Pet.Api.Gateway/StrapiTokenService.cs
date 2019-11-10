using Newtonsoft.Json;
using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace Meetup.Pet.Api.Gateway
{
    public class StrapiTokenService
    {
        private string _token = null;
        private DateTime? _tokenExpiry = null;

        public async Task<string> GetGatewayTokenAsync()
        {
            if (_token != null && _tokenExpiry > DateTime.Now.AddMinutes(-5))
                return _token;

            var httpClient = new HttpClient();

            var content = new
            {
                identifier = "gateway",
                password = "gateway12345",
            };

            var jsonContent = new StringContent(JsonConvert.SerializeObject(content), Encoding.UTF8, "application/json");

            var response = await httpClient.PostAsync($"http://localhost:1337/auth/local", jsonContent);
            if (response.IsSuccessStatusCode)
            {
                var rawResponse = await response.Content.ReadAsStringAsync();
                dynamic authResponse = JsonConvert.DeserializeObject(rawResponse);
                _token = authResponse.jwt;

                int expiresIn = 60 * 30;
                _tokenExpiry = DateTime.Now.Add(TimeSpan.FromSeconds(expiresIn));
            }

            return _token;
        }
    }
}