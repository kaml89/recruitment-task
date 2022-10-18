
import React from 'react'
import AddEventForm from './AddEventForm'
import { render, fireEvent, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils';

describe("Test add event form", () => {

  describe("with valid input", () => {
    it('should render success message', async () => {
      
    }) 
  })

  describe("with invalid first name", () => {
    it("should render firstName validation message", async () => {
      const {getByLabelText, getByPlaceholderText, getByRole, container} = render(<AddEventForm />)
      await act(async () => {
        const firstNameInput = screen.queryByPlaceholderText(/First name/i)
        // const firstNameInput = getByPlaceholderText("First name *");
        const button = getByRole('button');
        firstNameInput && fireEvent.change(firstNameInput, {target: {value: ""}})
        fireEvent.click(button)
      })

      expect(container.innerHTML).toMatch("First name is required")
    })

    it("renders the lastName validation message", async () => {
      const {getByLabelText, getByPlaceholderText, getByRole, container} = render(<AddEventForm />)
      await act(async () => {
        const lastNameInput = screen.queryByPlaceholderText(/Last name/i)
        // const firstNameInput = getByPlaceholderText("First name *");
        const button = getByRole('button');
        lastNameInput && fireEvent.change(lastNameInput, {target: {value: ""}})
        fireEvent.click(button)
      })

      expect(container.innerHTML).toMatch("Last name is required")
    })
  })

  describe("with invalid last name", () => {
    
  })

  describe("with invalid email name", () => {
    it("renders the email validation message", async () => {
      const {getByLabelText, getByPlaceholderText, getByRole, container} = render(<AddEventForm />)
      await act(async () => {
        const emailInput = screen.queryByPlaceholderText(/Email/i)
        // const firstNameInput = getByPlaceholderText("First name *");
        const button = getByRole('button');
        emailInput && fireEvent.change(emailInput, {target: {value: "abc@blabla"}})
        fireEvent.click(button)
      })

      expect(container.innerHTML).toMatch("Invalid email")
    })
  })

  describe("with invalid email name", () => {
    it("renders the email validation message", async () => {
      const {getByLabelText, getByPlaceholderText, getByRole, container} = render(<AddEventForm />)
      await act(async () => {
        const emailInput = screen.queryByPlaceholderText(/Email/i)
        // const firstNameInput = getByPlaceholderText("First name *");
        const button = getByRole('button');
        emailInput && fireEvent.change(emailInput, {target: {value: "abc@blabla"}})
        fireEvent.click(button)
      })

      expect(container.innerHTML).toMatch("Invalid email")
    })
  })

  describe("with invalid date", () => {
    it("display date-picker components", async () => {
      const {getByLabelText, getByPlaceholderText, getByRole,getByText, container} = render(<AddEventForm />)
      await act(async () => {
        const dateInput = screen.queryByPlaceholderText(/Select date/i);
        
        const button = getByRole('button');
        dateInput && fireEvent.change(dateInput, {target: {value: '10/13/2025'}})
        fireEvent.click(button)

      })

      const dateInput = await screen.queryByPlaceholderText(/Select date/i) as HTMLInputElement;
      expect(dateInput.value).toBe('10/13/2025');
    })

    it("displays error message when date is not selected", async () => {
      const {getByLabelText, getByPlaceholderText, getByRole,getByText, container} = render(<AddEventForm />)
      await act(async () => {
        const dateInput = screen.queryByPlaceholderText(/Select date/i);
        
        const button = getByRole('button');
        // dateInput && fireEvent.change(dateInput, {target: {value: '10/13/2025'}})
        fireEvent.click(button)

      })

      // const dateInput = await screen.queryByPlaceholderText(/Select date/i) as HTMLInputElement;
      expect(container.innerHTML).toMatch('Date is required');
    })

    it("displays error message when selected past date", async () => {
      const {getByLabelText, getByPlaceholderText, getByRole,getByText, container} = render(<AddEventForm />)
      await act(async () => {
        const dateInput = screen.queryByPlaceholderText(/Select date/i);

        const button = getByRole('button');
        dateInput && fireEvent.change(dateInput, {target: {value: '10/10/2022'}})
        const dateInput2 = screen.queryByPlaceholderText(/First name/i);
        fireEvent.click(button)
        
      })

      const now = new Date();
      const currentDate = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`
      const dateInput = await screen.queryByPlaceholderText(/Select date/i) as HTMLInputElement;
      // expect(dateInput.value).toBe(currentDate);
      expect(container.innerHTML).toMatch('Please choose future date')
    })
  })


  // describe("with invalid password", () => {
  //   it("renders the password validation error", async () => {
  //     const {getByLabelText, container} = render(<SignIn />)

  //     await act(async () => {
  //       const paswordInput = getByLabelText("Password *")
  //       fireEvent.change(paswordInput, {target: {value: "123"}})
  //       fireEvent.blur(paswordInput)
  //     })

  //     expect(container.innerHTML).toMatch("Password should be longer than 6 characters")

  //   })
  // })
})