import withData from '../services/hoc';
import ItemList from '../item-list/';


const AccountList = withData(ItemList);

export default AccountList;