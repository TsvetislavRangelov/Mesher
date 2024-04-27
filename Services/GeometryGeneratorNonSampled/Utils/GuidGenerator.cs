namespace GeometryGeneratorNonSampled.Utils;

/// <summary>
/// Methods concerned with generating GUIDs.
/// </summary>
public static class GuidGenerator
{
    /// <summary>
    /// Generates a UID.
    /// </summary>
    /// <returns>The generated UID.</returns>
    internal static string GenerateUid()
    {
        string guid = Guid.NewGuid().ToString();
        string firstHalfGuid = guid[..(guid.Length / 2)];
        string secondHalfGUid = guid.Substring(guid.Length / 2, guid.Length / 2 - 1);
        var secondHalfToUpper = secondHalfGUid.ToUpper();
        string combined = firstHalfGuid + secondHalfToUpper;
        return firstHalfGuid + secondHalfToUpper;
    }
}