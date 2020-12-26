import Person from './main/Person'
import Project from './main/Project'

describe('Basic Types', () => {
    test('Enum#number', () => {
        enum Color {Red, Green, Blue}
        let c: Color = Color.Green
        expect(c).toBe(1)
    })

    test('Enum#name', () => {
        enum Color {Red = 1, Green, Blue}

        let colorName: string = Color[2]
        expect(colorName).toBe('Green')
    })
})

describe('interface', () => {
    test('test', () => {
        let person : Person = {name: "Jane"}
        expect(person.name).toBe("Jane");

    })
})

describe('Project', () => {
    test('test', () => {
        let project = Project.of()
            .setCount(10)
            .setName("test")
            .setSize(30)

        console.log('>>> project', project);

        expect(project.getName()).toBe("test")
    })
})