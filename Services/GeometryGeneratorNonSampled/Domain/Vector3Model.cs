using System.Numerics;

namespace GeometryGeneratorNonSampled.Domain;

/// <summary>
/// Domain representation of a <see cref="Vector3"/>.
/// </summary>
/// <remarks>The fields have to be public,
/// otherwise they will not be serialized.</remarks>
public class Vector3Model
{
    /// <summary>
    /// X component.
    /// </summary>
    public float X { get; set; }
    /// <summary>
    /// Y component.
    /// </summary>
    public float Y { get; set; }
    /// <summary>
    /// Z component.
    /// </summary>
    public float Z { get; set; }

    public float this[int key]
    {
        set
        {
            switch (key)
            {
                case 0:
                    X = value;
                    break;
                case 1:
                    Y = value;
                    break;
                case 2:
                    Z = value;
                    break;
            }
        }
    }
    
    public Vector3Model(){}

    /// <summary>
    /// Ctor
    /// </summary>
    /// <param name="x">X component.</param>
    /// <param name="y">Y component.</param>
    /// <param name="z">Z component.</param>
    public Vector3Model(float x, float y, float z)
    {
        X = x;
        Y = y;
        Z = z;
    }

    /// <summary>
    /// Transform ctor.
    /// </summary>
    public Vector3Model(Vector3 v)
    {
        X = v.X;
        Y = v.Y;
        Z = v.Z;
    }

    /// <summary>
    /// Transform to <see cref="Vector3"/>.
    /// </summary>
    /// <returns>A <see cref="Vector3"/> instance.</returns>
    public Vector3 ToVector3()
    {
        return new Vector3(X, Y, Z);
    }
    
    /// <summary>
    /// Transforms to <see langword="float[]"/>.
    /// </summary>
    /// <returns>The vector in float array data type.</returns>
    public float[] ToFloatArray()
    {
        return [X, Y, Z];
    }
}