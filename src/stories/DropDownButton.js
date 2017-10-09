import { h } from 'preact'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import DropDownButton from '../components/DropDownButton'
const Container = styled.div`margin: 30px;`

storiesOf('DropDownButton', module)
  .addWithInfo('Standard', () => {
    return (
      <Container>
        <DropDownButton mx={2} primary label={<div>DropDown</div>}>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
        </DropDownButton>
        <DropDownButton mx={2} secondary label={<div>DropDown</div>}>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
        </DropDownButton>
        <DropDownButton mx={2} tertiary label={<div>DropDown</div>}>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
        </DropDownButton>
        <DropDownButton mx={2} label={<div>DropDown</div>}>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
        </DropDownButton>
      </Container>
    )
  })
  .addWithInfo('Borderless', () => {
    return (
      <Container>
        <DropDownButton
          mx={2}
          border={false}
          primary
          label={<div>DropDown</div>}
        >
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
        </DropDownButton>
        <DropDownButton
          mx={2}
          border={false}
          secondary
          label={<div>DropDown</div>}
        >
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
        </DropDownButton>
        <DropDownButton
          mx={2}
          border={false}
          tertiary
          label={<div>DropDown</div>}
        >
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
        </DropDownButton>
        <DropDownButton mx={2} border={false} label={<div>DropDown</div>}>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
        </DropDownButton>
      </Container>
    )
  })
  .addWithInfo('Joined', () => {
    return (
      <Container>
        <DropDownButton mx={2} joined primary label='DropDown'>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
        </DropDownButton>
        <DropDownButton mx={2} joined secondary label={<div>DropDown</div>}>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
        </DropDownButton>
        <DropDownButton mx={2} joined tertiary label={<div>DropDown</div>}>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
        </DropDownButton>
        <DropDownButton mx={2} joined>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
        </DropDownButton>
      </Container>
    )
  })