import * as Styled from './DashboardSubHeader.Styles'
import SubHeaderButton from './SubHeaderButton'
import { Filter } from '../../Common/icons/Filter'
import { Calendar } from '../../Common/icons/Calendar'
import { Profile } from '../../Common/icons/Profile'
import { Pause } from '../../Common/icons/Pause'
import { Menu } from '../../Common/icons/Menu'

const DashBoardSubHeader = () =>{
    return(
       <Styled.DashboardSubHeaderContainer>
        <Styled.SortButtonsSection>
            <SubHeaderButton isDropdown>
                <Filter/>
                Filter
            </SubHeaderButton>
            <SubHeaderButton isDropdown>
                <Calendar/>
                Today
            </SubHeaderButton>
        </Styled.SortButtonsSection>
        <Styled.ShareSection>
            <Styled.ShareButtonContainer>
                <SubHeaderButton>
                    <Profile/>
                    Share
                </SubHeaderButton>
                <Styled.ShareSectionLine/>
                <Styled.PauseIconContainer>
                    <Pause/>
                </Styled.PauseIconContainer>
            </Styled.ShareButtonContainer>
            <Menu/>
        </Styled.ShareSection>
       </Styled.DashboardSubHeaderContainer> 
    )
}

export default DashBoardSubHeader