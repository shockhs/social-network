import React from 'react';
import { create, act } from 'react-test-renderer';
import Status from './Status';

describe('StatusComponents', () => {
    test('status from props should be in state', () => {
        const component = create(<Status status="Hello world" />);
        const root = component.root;
        const instance = root.find(element => element.props.status === 'Hello world');
        expect(instance);
    })
    test('span must to be displayed', () => {
        const component = create(<Status status="Hello world" />);
        const root = component.root;
        const instance = root.findByType('span');
        expect(instance).not.toBeNull();
    })
    test('span must contain correct status', () => {
        const component = create(<Status status="Hello world" />);
        const root = component.root;
        const instance = root.findByType('span');
        expect(instance.children[0]).toBe("Hello world");
    })
    test('input must not to be displayed', () => {
        const component = create(<Status status="Hello world" />);
        const root = component.root;
        expect(() => {
            let instance = root.findByType('input');
        }).toThrow();
    })
    test('input must to be displayed after click on span', () => {
        const component = create(<Status status="Hello world" />);
        const root = component.root;
        const span = root.findByType('span');
        act(() => {
            span.props.onClick();
        })
        const input = root.findByType('input');
        expect(input.props.value).toBe("Hello world");
    })
    test('setStatus should be called after onBlur', () => {
        const callBackTest = jest.fn();
        const component = create(<Status status="Hello world" setUserProfileStatus={callBackTest}/>);
        const root = component.root;
        const span = root.findByType('span');
        act(() => {
            span.props.onClick();
        })
        const input = root.findByType('input');
        act(() => {
            input.props.onBlur();
        })
        expect(callBackTest.mock.calls.length).toBe(1);
    })
});
