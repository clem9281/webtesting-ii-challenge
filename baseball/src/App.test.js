import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, cleanup } from "react-testing-library";
import App from './App';
import "jest-dom/extend-expect";

afterEach(cleanup);

describe('app', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  describe('strike button', () => {
    it('increases strikes by 1 when strike is clicked', () => {
      const { getByText } = render(<App></App>);
      const strikeBtn = getByText(/strike$/i);
      const strikes = getByText(/strikes: 0/i);
      fireEvent.click(strikeBtn);
      expect(strikes).toHaveTextContent(/strikes: 1/i);
    })

    it("resets the strikes back to 0 when the strikes reach 3", () => {
      const { getByText } = render(<App />);
      const strikes = getByText(/strikes: 0/i);
      const strikeBtn = getByText(/strike$/i);
      fireEvent.click(strikeBtn);
      expect(strikes).toHaveTextContent('Strikes: 1');
      fireEvent.click(strikeBtn);
      expect(strikes).toHaveTextContent('Strikes: 2');
      fireEvent.click(strikeBtn);
      expect(strikes).toHaveTextContent('Strikes: 0');
    })

    it("resets the balls back to 0 when the strikes reach 3", () => {
      const { getByText } = render(<App />);
      const strikeBtn = getByText(/strike$/i);
      const balls = getByText(/balls: 0/i);
      const ballBtn = getByText(/ball$/i);
      fireEvent.click(ballBtn);
      expect(balls).toHaveTextContent(/balls: 1/i);
      fireEvent.click(strikeBtn);
      fireEvent.click(strikeBtn);
      fireEvent.click(strikeBtn);
      expect(balls).toHaveTextContent(/balls: 0/i);
    })
  });
  describe('ball button', () => {
    it('increases balls by 1 when ball is clicked', () => {
      const { getByText } = render(<App></App>);
      const ballBtn = getByText(/ball$/i);
      const balls = getByText(/balls: 0/i);
      fireEvent.click(ballBtn);
      expect(balls).toHaveTextContent(/balls: 1/i);
    })

    it("resets the balls back to 0 when the balls reach 4", () => {
      const { getByText } = render(<App />);
      const balls = getByText(/balls: 0/i);
      const ballBtn = getByText(/ball$/i);
      fireEvent.click(ballBtn);
      expect(balls).toHaveTextContent(/balls: 1/i);
      fireEvent.click(ballBtn);
      expect(balls).toHaveTextContent(/balls: 2/i);
      fireEvent.click(ballBtn);
      expect(balls).toHaveTextContent(/balls: 3/i);
      fireEvent.click(ballBtn);
      expect(balls).toHaveTextContent(/balls: 0/i);
    })

    it("resets the strikes back to 0 when the balls reach 4", () => {
      const { getByText } = render(<App />);
      const strikeBtn = getByText(/strike$/i);
      const strikes = getByText(/strikes: 0/i);
      const ballBtn = getByText(/ball$/i);
      fireEvent.click(strikeBtn);
      expect(strikes).toHaveTextContent(/strikes: 1/i);
      fireEvent.click(ballBtn);
      fireEvent.click(ballBtn);
      fireEvent.click(ballBtn);
      fireEvent.click(ballBtn);
      expect(strikes).toHaveTextContent(/strikes: 0/i);
    })
  })
  describe('foul button', () => {
    it('increases strikes by 1 when foul is clicked', () => {
      const { getByText } = render(<App></App>);
      const foulBtn = getByText(/foul$/i);
      const strikes = getByText(/strikes: 0/i);
      fireEvent.click(foulBtn);
      expect(strikes).toHaveTextContent(/strikes: 1/i);
    })

    it("doesn't increment strikes when strikes are at 2", () => {
      const { getByText } = render(<App />);
      const strikes = getByText(/strikes: 0/i);
      const strikeBtn = getByText(/strike$/i);
      const foulBtn = getByText(/foul$/i);
      fireEvent.click(strikeBtn);
      expect(strikes).toHaveTextContent('Strikes: 1');
      fireEvent.click(strikeBtn);
      expect(strikes).toHaveTextContent('Strikes: 2');
      fireEvent.click(foulBtn);
      expect(strikes).toHaveTextContent('Strikes: 2');
    })
  })
  describe('hit button', () => {
    it('sets balls and strikes back to 0', () => {
      const { getByText } = render(<App></App>);
      const balls = getByText(/balls: 0/i);
      const strikes = getByText(/strikes: 0/i);
      const hitBtn = getByText(/hit$/i);
      const strikeBtn = getByText(/strike$/i);
      const ballBtn = getByText(/ball$/i);
      fireEvent.click(strikeBtn);
      fireEvent.click(ballBtn);
      expect(strikes).toHaveTextContent(/strikes: 1/i);
      expect(balls).toHaveTextContent(/balls: 1/i);
      fireEvent.click(hitBtn);
      expect(strikes).toHaveTextContent(/strikes: 0/i);
      expect(balls).toHaveTextContent(/balls: 0/i);
    })
  })
})