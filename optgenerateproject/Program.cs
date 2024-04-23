using System;

class Program
{
    static string PromotionId = "ALG2024";
    static int[] PromotionIdEight = { 1, 4, 7, 2, 0, 2, 4 };//promotion koddaki değerleri asciideki
    // değerlerinin mod 8 e göre değerleri

    static string CharacterCluster = "ACDEFGHKLMNPRTXYZ234579";//karekter seti/kümesi 
    static int[] EightMod = {
        1, 3, 4, 5, 6, 7, 0, 3, 4, 5, 6, 0, 2, 4, 0, 1, 2, 2, 3, 4, 5, 7, 1
    };
    //karekter kümesindeki değerlerin asciideki değerlerinin mod8 e göre sonuçları
    //ürettiğim promotion codelarda ilk 7 hanesinde { 1, 4, 7, 2, 0, 2, 4 } bu patterni görmek istiyorum eğer bu patterni görüyorsam 
    //benim ürettiğim kampanyadır diyebilirim 
    //kampanya kodunu daha kısa tutarsak 7 hane değilde 4 hane gibi daha fazla benzersiz
    //kod üretebiliriz.


static string GenerateCODE()
{
    string code = "";
    int index = 0;
    Random rnd = new Random();
    while (code.Length != 8 && index < 7)
    {
        int randomNumber = rnd.Next(0, 23);
        int el = EightMod[randomNumber];

        if (PromotionIdEight[index] == el) 
        {
            code += CharacterCluster[randomNumber];
            index++;
        }
    }
    return code;
}


static bool CheckPromotionCode(string code)
{
    int[] asciiNumberModEight = new int[7];
    for (int i = 0; i < 7; i++)
    {
        asciiNumberModEight[i] = code[i] % 8;
    }

    for (int i = 0; i < 7; i++) 
    {
        if (PromotionIdEight[i] != asciiNumberModEight[i])
        {
            return false;
        }
    }
    return true; 
}




    static void Main(string[] args)
    {
        string code = "KT72P2T";
        Console.WriteLine(code);
        Console.WriteLine("Promotion code validity: " + CheckPromotionCode(code));
    }
}
