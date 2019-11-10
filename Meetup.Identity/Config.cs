using IdentityModel;
using IdentityServer4;
using IdentityServer4.Models;
using IdentityServer4.Test;
using System.Collections.Generic;
using System.Security.Claims;

namespace Meetup.Identity
{
    public static class Config
    {
        public static IEnumerable<IdentityResource> Ids => new IdentityResource[]
        {
            new IdentityResources.OpenId(),
            new IdentityResources.Profile(),
            new IdentityResources.Email(),
        };

        public static IEnumerable<ApiResource> Apis => new ApiResource[]
        { 
            new ApiResource("MeetupApi", "The Meetup API", new []
            {
                JwtClaimTypes.Email,
                JwtClaimTypes.GivenName,
                JwtClaimTypes.FamilyName
            })
        };

        public static IEnumerable<Client> Clients => new Client[]
        {
            new Client
            {
                ClientId = "MeetupSpa",
                ClientName = "The Meetup Single Page Application",
                AllowedGrantTypes = GrantTypes.Implicit,
                RedirectUris = { "http://localhost:4200" },
                RequireConsent = false,

                PostLogoutRedirectUris = { "http://localhost:4200" },

                AllowedScopes = new List<string>
                {
                    IdentityServerConstants.StandardScopes.OpenId,
                    IdentityServerConstants.StandardScopes.Profile,
                    IdentityServerConstants.StandardScopes.Email,
                    IdentityServerConstants.StandardScopes.OfflineAccess,
                    "MeetupApi"
                },

                AllowedCorsOrigins = { "http://localhost:4200" },
                AllowAccessTokensViaBrowser = true,
                AlwaysIncludeUserClaimsInIdToken = true,
                UpdateAccessTokenClaimsOnRefresh = true,
                AccessTokenLifetime= 3600,
                RequireClientSecret = false,
                AllowOfflineAccess = true
            }
        };

        public static List<TestUser> TestUsers => new List<TestUser>
        {
            new TestUser()
            {
                SubjectId = "1",
                Username = "ChuckNorris",
                Password = "ChucksPassword",
                Claims = new []
                {
                    new Claim("name", "Chuck Norris"),
                    new Claim(ClaimTypes.GivenName, "Chuck"),
                    new Claim(ClaimTypes.Name, "Norris"),
                    new Claim(ClaimTypes.Email, "chucknorris@lol.com")
                }                
            }
        };
    }
}
