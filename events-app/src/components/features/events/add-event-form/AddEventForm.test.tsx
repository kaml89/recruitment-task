import AddEventForm from './AddEventForm'
import { render, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
// import { jest} from '@jest/globals'

describe("Test add event form", () => {

  /* I have run into error "jest is undefined" when trying to call jest.fn() 
     I tried to import jest from @jest/globals i got "Error: Do not import `@jest/globals` outside of the Jest test environment"
  */

  // describe("with valid input", () => {
  //   it('should render success message', async () => {
  //     const mockOnSubmit = jest.fn();  
  //     const date = new Date();
  //     const dateInputText = `${date.getMonth() + 1}/${date.getDate() + 1}/${date.getFullYear()}`;
  //     const { getByPlaceholderText, getByRole, container } = render(<AddEventForm onSubmit={mockOnSubmit} loading={false}/>);

  //     await act(async () => {
  //       const firstNameInput = getByPlaceholderText("First name");
  //       const lastNameInput = getByPlaceholderText("Last name");
  //       const emailInput = getByPlaceholderText('Email');
  //       const dateInput = getByPlaceholderText("Select date");
        
  //       firstNameInput && fireEvent.change(firstNameInput, {target: {value: "jan"}});
  //       lastNameInput && fireEvent.change(lastNameInput, {target: {value: "kowalski"}});
  //       emailInput && fireEvent.change(emailInput, {target: {value: "abc@blabla.com"}});

  //       dateInput && fireEvent.change(dateInput, {target: {value: dateInputText}});
        
  //     })

  //     await act(async () => {
  //       const button = getByRole('button');
  //       fireEvent.click(button);
  //     })

  //     expect(mockOnSubmit).toHaveBeenCalled();

  //   }) 
  // })

  describe("with invalid input", () => {
    it("should render firstName validation message", async () => {
      // const mockOnSubmit = jest.fn();
      const func = () => {};
      const { getByPlaceholderText, getByRole, container } = render(<AddEventForm onSubmit={func} loading={false}/>);
      await act(async () => {
        // const firstNameInput = screen.queryByPlaceholderText(/First name/i)
        const firstNameInput = getByPlaceholderText("First name");
        const button = getByRole('button');
        firstNameInput && fireEvent.change(firstNameInput, {target: {value: ""}})
        fireEvent.click(button)
      })

      expect(container.innerHTML).toMatch("First name is required")
    })

    it("should render lastName validation message", async () => {
      // const mockOnSubmit = jest.fn();
      const func = () => {};
      const { getByPlaceholderText, getByRole, container } = render(<AddEventForm onSubmit={func} loading={false}/>);
      await act(async () => {
        const lastNameInput = getByPlaceholderText("Last name");
        const button = getByRole('button');
        lastNameInput && fireEvent.change(lastNameInput, {target: {value: ""}});
        fireEvent.click(button);
      })

      expect(container.innerHTML).toMatch("Last name is required")
    })

    it("should render email validation message", async () => {
      // const mockOnSubmit = jest.fn();
      const func = () => {};
      const { getByPlaceholderText, getByRole, container } = render(<AddEventForm onSubmit={func} loading={false}/>);
      await act(async () => {
        const emailInput = getByPlaceholderText('Email');
        const button = getByRole('button');
        emailInput && fireEvent.change(emailInput, {target: {value: "abc@blabla"}});
        fireEvent.click(button);
      })

      expect(container.innerHTML).toMatch("Invalid email")
    })

    it("should render date validation message", async () => {
      // const mockOnSubmit = jest.fn();
      const func = () => {};
      const { getByRole, container } = render(<AddEventForm onSubmit={func} loading={false}/>);
      await act(async () => {

        const button = getByRole('button');
        fireEvent.click(button);

      })
      expect(container.innerHTML).toMatch('Date is required');
      
    })
  })

  describe("loading props set to true", () => {
    it("should display loading", async () => {
      // const mockOnSubmit = jest.fn();
      const func = () => {};
      const { container, rerender } = render(<AddEventForm onSubmit={func} loading={false}/>);
      expect(container.innerHTML).toMatch('Submit');
      rerender(<AddEventForm onSubmit={func} loading={true}/>);
      expect(container.innerHTML).toMatch('Loading');

    })
  })

})