export class Employee {
    id: number;
    name: string;
    surname: string;
    sex: string;
    salary: number;

    constructor(id:number,
            name: string,
            surname: string,
            sex: string,
            salary: number) {
                this.id = id;
                this.name = name;
                this.surname = surname;
                this.sex = sex;
                this.salary = salary;
            }
}