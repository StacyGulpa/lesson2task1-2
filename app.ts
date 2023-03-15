interface AnimalBehavior {
    move(): void;
    eat(food: string): void;
    sleep?(): void; // Опціональний метод
    name?: string; // Опціональна властивість
  }
  class Cat implements AnimalBehavior {
    move(): void {
      console.log("The cat is running");
    }
  
    eat(food: string): void {
      console.log(`The cat is eating ${food}`);
    }
  
    sleep(): void {
      console.log("The cat is sleeping");
    }
  }
  
  class Bird implements AnimalBehavior {
    move(): void {
      console.log("The bird is flying");
    }
  
    eat(food: string): void {
      console.log(`The bird is eating ${food}`);
    }
  }
  
  class Fish implements AnimalBehavior {
    move(): void {
      console.log("The fish is swimming");
    }
  
    eat(food: string): void {
      console.log(`The fish is eating ${food}`);
    }
  
    name: string = "Fishy";
  }
  