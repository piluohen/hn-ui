```JS
// JavaScript
options: any = [];

value: any = ['A', 'E'];

constructor(
  private fb: FormBuilder,
) {
  this.validateForm = this.fb.group({
    checkbox: [this.value]
  });
  this.options = ['A', 'B', 'C', 'D', 'E', 'F'].map(item => {
    return {
      label: `${item}选项` ,
      value: item
    };
  });
}

handleChange(data: any): void {
  console.log(data);
}

handleSave(): void {
  console.log(this.validateForm.value);
}
```
