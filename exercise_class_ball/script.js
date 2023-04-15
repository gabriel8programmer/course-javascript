
//get dom's elements
const element_display = document.getElementById("display");
//text amound
const txt_amound = document.getElementById("txt-amound");
//text for adding
const txt_adding = document.getElementById("txt-add");
//controls
const btn_adding = document.getElementById("btn-add");
const btn_remove = document.getElementById("btn-remove");

//width and height
let WIDTH = element_display.offsetWidth;
let HEIGHT = element_display.offsetHeight;
let list_ball_elements = [];

//class ball
class Ball {

  constructor(surface, list) {
    this.size = Math.round(Math.random() * 10) + 20;
    this.x = Math.round(Math.random() * (WIDTH - this.size));
    this.y = Math.round(Math.random() * (HEIGHT - this.size));
    this.dir_x = this.get_random_dir();
    this.dir_y = this.get_random_dir();
    this.vel_x = this.get_random_vel();
    this.vel_y = this.get_random_vel();
    this.r = this.get_random_color();
    this.g = this.get_random_color();
    this.b = this.get_random_color();
    this.id = "";
    this.element = this.get_new_element();
    this.surface = surface;
    this.list = list;

    //call methods
    this.render();
    this.update();
  }

  get_random_dir = () => {
    return Math.round(Math.random() * 10) >= 5 ? 1 : -1;
  }

  get_random_vel = () => {
    return Math.round(Math.random() * 10) + 1;
  }

  get_random_color = () => {
    return Math.round(Math.random() * 255);
  }

  format_for_pixel = (value) => {
    return `${value}px`;
  }

  format_for_rgb = (r, g, b) => {
    return `rgb(${r},${g},${b})`;
  }

  get_new_element = () => {
    const element = document.createElement("div");
    //define props element
    element.setAttribute("class", "ball");
    element.style.left = this.format_for_pixel(this.x);
    element.style.top = this.format_for_pixel(this.y);
    element.style.width = this.format_for_pixel(this.size);
    element.style.height = this.format_for_pixel(this.size);
    element.style.backgroundColor = this.format_for_rgb(this.r, this.g, this.b)
    //return element
    return element
  }

  remove = () => {
    this.element.remove();
    this.list.pop();
  }

  render = () => {
    this.surface.appendChild(this.element);
  }

  control_move_vertical = () => {
    if ((this.y + this.size) >= HEIGHT) {
      this.dir_y = -1;
    } else if (this.y < 0) {
      this.dir_y = 1;
    }
  }

  control_move_horizontal = () => {
    if ((this.x + this.size) >= WIDTH) {
      this.dir_x = -1;
    } else if (this.x < 0) {
      this.dir_x = 1;
    }
  }

  move = () => {
    this.x += (this.vel_x * this.dir_x);
    this.y += (this.vel_y * this.dir_y);

    //test if ball exited of the screen
    if (this.x > WIDTH || this.y > HEIGHT) {
      this.remove();
    }
  }

  update = () => {
    txt_amound.value = this.list.length;
    this.control_move_horizontal();
    this.control_move_vertical();
    this.move();
    this.element.style.left = this.format_for_pixel(this.x);
    this.element.style.top = this.format_for_pixel(this.y);
    requestAnimationFrame(this.update);
  }

}

//creating method for the window resize's event
window.addEventListener("resize", (e) => {
  WIDTH = element_display.offsetWidth;
  HEIGHT = element_display.offsetHeight;
});

//creating method for button add
btn_adding.addEventListener("click", (e) => {
  //creating logic for add balls
  const value = txt_adding.value;

  for (let c = 0; c < value; c++) {
    //add ball
    const ball = new Ball(element_display, list_ball_elements);
    list_ball_elements.push(ball);
  }

});

//creating method for button remove
btn_remove.addEventListener("click", (e) => {
  //creating logic for remove balls

  list_ball_elements.map(ball => {
    //remove ball
    ball.remove();
  });

});