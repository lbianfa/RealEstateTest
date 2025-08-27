namespace RealEstate.Ownering;

public static class OwneringDbProperties
{
    public static string DbTablePrefix { get; set; } = "Ownering";

    public static string? DbSchema { get; set; } = null;

    public const string ConnectionStringName = "Ownering";
}
