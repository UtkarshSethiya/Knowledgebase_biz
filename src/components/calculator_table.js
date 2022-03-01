import './calculator_table.css'
function Table(props){
    console.log(props.attend)
    return(<div>

<div class="containertable">
	
	<div class="table">
		<div class="table-header">
			<div class="header__item"><a id="name" class="filter__link" >Features</a></div>
			<div class="header__item"><a id="wins" class="filter__link filter__link--number" >Quantity</a></div>
			<div class="header__item"><a id="draws" class="filter__link filter__link--number" >Cost</a></div>
		
		</div>
		<div class="table-content">	
        <div class="table-row">		
				<div class="table-data">Plan</div>
				<div class="table-data">Type:{props.plantype}</div>
				<div class="table-data">$ {props.plancost}</div>
			
			</div>
			<div class="table-row">		
				<div class="table-data">Attendees Volume</div>
				<div class="table-data">{props.attend}</div>
				<div class="table-data">$ {props.attendcost}</div>
			
			</div>
            <div class="table-row">		
				<div class="table-data">Extra Booth</div>
				<div class="table-data">{props.exhibitor}</div>
				<div class="table-data">$ {props.exhibitorcost}</div>
			
			</div>
            <div class="table-row">		
				<div class="table-data">Custom Hall Template</div>
				<div class="table-data">{props.customhall}</div>
				<div class="table-data">$ {props.customhallcost}</div>
			
			</div>
            <div class="table-row">		
				<div class="table-data">Custom Booth Template</div>
				<div class="table-data">{props.custombooth}</div>
				<div class="table-data">$ {props.customboothcost}</div>
			
			</div>
            
            <div class="table-row">		
				<div class="table-data">White Label</div>
				<div class="table-data">{props.whitelabel}</div>
				<div class="table-data">$ {props.whitelabelcost}</div>
			
			</div>
            <div class="table-row">		
				<div class="table-data">Customlanding Template</div>
				<div class="table-data">{props.customlanding}</div>
				<div class="table-data">$ {props.customlandingcost}</div>
			
			</div>
            <div class="table-row">		
				<div class="table-data">Branded Lobby Walkthrus</div>
				<div class="table-data">{props.three}</div>
				<div class="table-data">$ {props.threecost}</div>
			
			</div>
            <div class="table-row">		
				<div class="table-data">Customlobby Template</div>
				<div class="table-data">{props.customlobby}</div>
				<div class="table-data">$ {props.customlobbycost}</div>
			
			</div>
            <div class="table-row">		
				<div class="table-data">Auditorium</div>
				<div class="table-data">{props.auditorium}</div>
				<div class="table-data">$ {props.auditoriumcost}</div>
			
			</div>
            <div class="table-row">		
				<div class="table-data">Games</div>
				<div class="table-data">{props.games}</div>
				<div class="table-data">$ {props.gamescost}</div>
			
			</div>
            <div class="table-row">		
				<div class="table-data">Photo Booth</div>
				<div class="table-data">{props.booth}</div>
				<div class="table-data">$ {props.boothcost}</div>
			
			</div>
            <div class="table-row">		
				<div class="table-data">Tech Support</div>
				<div class="table-data">{props.hour}</div>
				<div class="table-data">$ {props.hourcost}</div>
			
			</div>
			<div class="table-row">
				<div class="table-data"></div>
				<div class="table-data"></div>
				<div class="table-data">Total: ${props.total}</div>
			
			</div>
			
		</div>	
	</div>
</div>
    </div>)
}

export default Table;