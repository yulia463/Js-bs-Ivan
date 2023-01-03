class Slider {
    constructor(width, height, count) {
        this.width = width;
        this.height = height;
        this.count = count;
    }
    nextSlide() {
        console.log('Moving forward');
    }
    prevSlide() {
        console.log('Moving back');
    }
    whoAmI() {
        console.log(this.width, this.height, this.count);
    }
}

const slider = new Slider(600, 400, 5);
slider.whoAmI();
const someSlider = new Slider(300, 450, 10);
someSlider.whoAmI();



class AutoSlider extends Slider {
    constructor(width, height, count, auto) {
        super(width, height, count);
        this.auto = auto;
    }

    play() {
        console.log(`Autoplay : ${this.auto}`);
    }
}

const sliderOne = new AutoSlider(500, 400, 4, true);
slider.whoAmI();
sliderOne.play();

