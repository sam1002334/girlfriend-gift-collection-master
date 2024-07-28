// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // The length of the sentences can be arbitrary, you can write ten sentences or twenty sentences
    // Try not to exceed 15 characters per sentence, otherwise the display effect may not be very good
    texts: [
        "For my",
        "Beloved girl",
        "Today is your birthday",
        "This is our",
        "Third birthday together!",
        "In these two years, I've seen you",
        "In strange looks",
        "In cute looks",
        "In angry looks",
        "I love all these looks",
        "By the way, did you get all your gifts?",
        "This year, eat well",
        "Get full",
        "Then you'll have the energy to work",
        "And think of me!",
        "Happy birthday~~",
    ],
    /**
     * imgs can be left empty, but if you want to fill it in, it must follow the format below
     * "Exactly match the text above" : "Image URL, you can put the image in the imgs folder"
     * For example
     * "Beloved little cutie": "./imgs/xiaokeai.jpg"
     *
     * If you don't want an image, just comment out the line with two slashes at the beginning, for example, the image for "Today is your birthday" won't be displayed :)
     * Tip: It is best to use square or nearly square images, it looks better
     */
    imgs: {
        "For my": "./imgs/songxinxin.jpeg",
        "Beloved girl": "./imgs/nothing.jpg",
        "Today is your birthday": "./imgs/shengri.jpeg",
        "This is our": "./imgs/zaiyiqi.png",
        "Third birthday together!": "./imgs/nothing.jpg",
        "In these two years, I've seen you": "./imgs/yangzi.jpeg",
        "In strange looks": "./imgs/nothing.jpg",
        "In cute looks": "./imgs/nothing.jpg",
        "In angry looks": "./imgs/nothing.jpg",
        "I love all these looks": "./imgs/nothing.jpg",
        "By the way, did you get all your gifts?": "./imgs/chuo.gif",
        "This year, eat well": "./imgs/chihaodian.png",
        "Get full": "./imgs/weibao.jpeg",
        "Then you'll have the energy to work": "./imgs/nothing.jpg",
        "And think of me!": "./imgs/nothing.jpg",
        "Happy birthday~~": "./imgs/nothing.jpg"
    },
    
    // Button text description, the following is the default button text in English, you can change it to your favorite text
    desc: {
        turn_on: "Click to start",
        play: "Play music",
        bannar_coming: "Add some color",
        balloons_flying: "Seems like something is missing",
        cake_fadein: "Cake?",
        light_candle: "Candles?",
        wish_message: "Happy Birthday~",
        story: "A MESSAGE FOR YOU"
    },

    // End text
    loveText: 'Love, Mr. X~'
};
