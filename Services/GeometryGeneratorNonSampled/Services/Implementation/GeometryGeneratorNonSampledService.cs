using System.Numerics;
using GeometryGeneratorNonSampled.Services.Interfaces;

namespace GeometryGeneratorNonSampled.Services.Implementation;


public class GeometryGeneratorNonSampledService : IGeometryGeneratorNonSampled
{
    public int[] Generate()
    {
        // TODO: This currently handles cube geometry only(box).
        // the api should handle generating a random geometry suitable
        // for all geometric primitives as a first step.
        const int lowerThreshold = 1;
        const int upperThreshold = 7;
        var rand = new Random();
        var vector = new Vector3(rand.Next(lowerThreshold, upperThreshold), 
            rand.Next(lowerThreshold, upperThreshold), rand
                .Next(lowerThreshold, upperThreshold));
        return [(int)vector.X, (int)vector.Y, (int)vector.Z];
    }
}