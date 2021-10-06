class Todo {
  id: string;
  name: string;
  constructor(texttodo: string) {
    this.name = texttodo;
    this.id = Math.random().toString();
  }
}

export default Todo;
