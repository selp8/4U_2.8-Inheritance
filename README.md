# 2.8 - Inheritance

###### ICS4U - Mr. Brash 🐿

But humans have legs and whales don't... But we both breathe air with lungs. We _inherit_ the trait "lungs" from the mammal _classification_.<br>
The same can be done with objects (classes) in OOP.

- [Part 1 - Inheritance](#part-1---inheritance)
- [Part 2 - Super!](#part-2---super-🦸🏻)
- [Jump to the task](TASK.md)


# Part 1 - Inheritance

Protection is very important. It is a cornerstone of OOP. But what if we end up with multiple Classes that contain similar code?

---

When _designing_ an object, you might realize that it requires some or all of the same code as another object you already declared. An important idiom of programming is **DRY** - **D**on't **R**epeat **Y**ourself. If you can reuse part of another object, you might want to do so.

Let's use real life **animals** as an example:

![](assets/inheritance_small.png)

All of the animals listed above have ears. They eat. They make noise. They are warm-blooded. But they are different - they make _different_ noises, they eat different foods. They may or may not have fur. What if we included a bird or human?

When declaring classes for these "objects", we might use the following:
![animals](assets/animals.png)

Notice the arrows from each `subclass` to the `Animal` `superclass`? This means "Dog comes from Animal", etc. All three subclasses have the traits of `Animal`.

In this example, the `Dog` class _extends_ the `Animal` class but adds a few things. Similarly, the `Cat` and `Cow` classes also _extend_ the `Animal` class. They _inherit_ the values and methods from the `Animal` class and have the opportunity to add their own.

**Let's look at a simplified example in JavaScript:**
```JS
// The superclass (parent)
class Animal {
  legs = 2;

  constructor(legs) {
    this.legs = legs;
  }

  speak() {
    console.log("I'm an Animal");
  }
}

// A subclass (child) of Animal
class Dog extends Animal {
  name = "";
  has_fleas = false;

  constructor(name, fleas) {
    this.legs = 4;      // We still have a "legs" attribute
    this.name = name;
    this.has_fleas = fleas;
  }

  // Override the speak() function
  speak() {
    console.log("WOOF!");
  }  
}
```

🤔 Should the `legs` be public? (more on that later)

### Notice the keyword `extends` on the `Dog` class!
This means the `Dog` class will _inherit_ everything already created inside the `Animal` class. We can choose to keep it all or overwrite some of it - like overwriting the `speak()` method.

Let's test instances of a generic `Animal` or a `Dog`:
```JS
let anim = new Animal(6);
let doggo = new Dog("Spot", false);

anim.speak();   // "I'm an Animal"
doggo.speak();  // "WOOF!"
anim.legs       // 6
doggo.legs      // 4
anim.has_fleas  // undefined
doggo.has_fleas // false
anim.name       // undefined
doggo.name      // "Spot"
```

### ❔Question:
Can you think of some `subclasses` that would inherit from and _extend_ the `Vehicle` class you created last class?

<br><br>

# Part 2 - Super! 🦸🏻

