using System;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace TourioX.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class MapController : ControllerBase
    {
        private readonly HttpClient _httpClient;

        public MapController()
        {
            _httpClient = new HttpClient();
        }

        [HttpGet("markers")]
        public async Task<ActionResult<IEnumerable<MapMarker>>> GetMarkers()
        {
            var markers = new List<MapMarker>();

            // Replace YOUR_API_KEY with your actual Google Maps API key
            var apiKey = "AIzaSyDYnygsYXrvEY8VNWdGvpAvqaRZsXjlfaI";

            // Replace the addresses with the locations you want to geocode
            var locations = new List<string> { "New York City, NY", "Los Angeles, CA", "Chicago, IL" };

            foreach (var location in locations)
            {
                var geocodingUrl = $"https://maps.googleapis.com/maps/api/geocode/json?address={Uri.EscapeDataString(location)}&key={apiKey}";

                var response = await _httpClient.GetAsync(geocodingUrl);

                if (response.IsSuccessStatusCode)
                {
                    var content = await response.Content.ReadAsStringAsync();
                    var geocodingResult = Newtonsoft.Json.JsonConvert.DeserializeObject<GeocodingResponse>(content);

                    if (geocodingResult?.Results?.Count > 0)
                    {
                        var result = geocodingResult.Results[0];
                        markers.Add(new MapMarker
                        {
                            Id = markers.Count + 1,
                            Latitude = result.Geometry.Location.Latitude,
                            Longitude = result.Geometry.Location.Longitude,
                            Title = result.FormattedAddress
                        });
                    }
                }
            }

            return Ok(markers);
        }
    }

    public class MapMarker
    {
        public int Id { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public string Title { get; set; }
    }

    public class GeocodingResponse
    {
        public List<GeocodingResult> Results { get; set; }
    }

    public class GeocodingResult
    {
        public string FormattedAddress { get; set; }
        public Geometry Geometry { get; set; }
    }

    public class Geometry
    {
        public Location Location { get; set; }
    }

    public class Location
    {
        public double Latitude { get; set; }
        public double Longitude { get; set; }
    }
}



