import React from 'react'
import { WrapperContent, WrapperLableText, WrapperTextPrice, WrapperTextValue } from './style'
import { Checkbox, Rate } from 'antd'

const NavBarComponent = () => {
    const onChange = () => { }
    const renderContent = (type, options) => {
        switch (type) {
            case 'text':
                return options.map((option, index) => {
                    return <WrapperTextValue key={index}>{option}</WrapperTextValue>
                })
            case 'checkbox':
                return (
                    <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }} onChange={onChange}>
                        {options.map((option, index) => {
                            return (
                                <Checkbox key={index} style={{ marginLeft: 0 }} value={option.value}>{option.lable}</Checkbox>
                            )
                        })}
                    </Checkbox.Group>
                )
            case 'star':
                return options.map((option, index) => {
                    return (
                        <div key={index} style={{ display: 'flex' }}>
                            <Rate style={{ fontSize: '12px' }} disabled defaultValue={option} />
                            <span>{` tu ${option} sao`}</span>
                        </div>
                    )
                })
            case 'price':
                return options.map((option, index) => {
                    return (
                        <WrapperTextPrice key={index}>{option}</WrapperTextPrice>
                    )
                })
            default:
                return {}
        }
    }

    return (
        <div>
            <WrapperLableText>Lable</WrapperLableText>
            <WrapperContent>
                {renderContent('text', ['Ao coc tay', 'Ao dai tay', 'Quan dai'])}
            </WrapperContent>

        </div>
    )
}

export default NavBarComponent
