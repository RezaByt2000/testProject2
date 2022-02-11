import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faTableCellsLarge,faBitcoinSign,faChartLine,faVault, faNoteSticky,faRocket, faUserGroup } from '@fortawesome/free-solid-svg-icons'

import 'bootstrap/dist/css/bootstrap.min.css';


const listItems = [[<FontAwesomeIcon className='mx-4' icon={faHouse} />,'Dashboard'],[<FontAwesomeIcon className='mx-4' icon={faTableCellsLarge} />,'Vote'],[<FontAwesomeIcon className='mx-4' icon={faBitcoinSign} />,'BTC'],[<FontAwesomeIcon className='mx-4' icon={faChartLine} />,'Market'],[<FontAwesomeIcon className='mx-4' icon={faVault} />,'Vault'],[<FontAwesomeIcon className='mx-4' icon={faNoteSticky} />, 'Transactions'],[<FontAwesomeIcon className='mx-4' icon={faRocket} />,'BTC Prediction'],[<FontAwesomeIcon className='mx-4' icon={faUserGroup} />, 'Forum']];



export {listItems};




