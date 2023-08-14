import { ReactNode } from 'react';
import * as Styles from './SubHeaderButton.Styles'
import { ArrowDown } from '../../../Common/icons/ArrowDown';

//add more code for actual dropdown functionality when it is actually needed
const SubHeaderButton = ({children , isDropdown}:{isDropdown?: boolean, children: ReactNode}) =>{
    return(
        <Styles.SubHeaderButtonContainer>
            <Styles.ContentSection>
                {children}
            </Styles.ContentSection>
            {isDropdown && <ArrowDown/>}
        </Styles.SubHeaderButtonContainer>
    )
}

export default SubHeaderButton;