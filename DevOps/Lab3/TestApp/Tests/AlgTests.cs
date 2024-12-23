using Code;

namespace Tests;

public class AlgTests
{
    [Fact]
    public void Test1()
    {
        Assert.Equal((5 + 7) / 2, Algorithms.Med(5, 7));
    }
}