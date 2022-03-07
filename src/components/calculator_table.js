import './calculator_table.css'

function Table(props){
    console.log(props.attend)
    return(<div>

<div class="containertable">
	
	<div class="table">
		<div class="table-header">
			<div class="header__item"><a id="name" class="filter__link heading" >Features</a></div>
			<div class="header__item"><a id="wins" class="filter__link filter__link--number heading" >Quantity</a></div>
			<div class="header__item"><a id="draws" class="filter__link filter__link--number heading" >Cost</a></div>
		
		</div>
		<div class="table-content">	
          <div class="table-row table-border">		
				<div class="table-data table-border-child align">Plan</div>
				<div class="table-data table-border-child">Type:{props.plantype}</div>
				<div class="table-data table-border-child">$ {props.plancost}</div>
			
			</div>
			<div class="table-row table-border">		
				<div class="table-data table-border-child align">Attendees Volume</div>
				<div class="table-data table-border-child">{props.attend}</div>
				<div class="table-data table-border-child">$ {props.attendcost}</div>
			
			</div>
            <div class="table-row table-border">		
				<div class="table-data table-border-child align">Extra Booth</div>
				<div class="table-data table-border-child">{props.exhibitor}</div>
				<div class="table-data table-border-child">$ {props.exhibitorcost}</div>
			
			</div>
            <div class="table-row table-border">		
				<div class="table-data table-border-child align">Custom Hall Template</div>
				<div class="table-data table-border-child">{props.customhall}</div>
				<div class="table-data table-border-child">$ {props.customhallcost}</div>
			
			</div>
            <div class="table-row table-border">		
				<div class="table-data table-border-child align">Custom Booth Template</div>
				<div class="table-data table-border-child">{props.custombooth}</div>
				<div class="table-data table-border-child">$ {props.customboothcost}</div>
			
			</div>
            
            <div class="table-row table-border">		
				<div class="table-data table-border-child align">White Label</div>
				<div class="table-data table-border-child">{props.whitelabel}</div>
				<div class="table-data table-border-child">$ {props.whitelabelcost}</div>
			
			</div>
            <div class="table-row table-border">		
				<div class="table-data table-border-child align">Customlanding Template</div>
				<div class="table-data table-border-child">{props.customlanding}</div>
				<div class="table-data table-border-child">$ {props.customlandingcost}</div>
			
			</div>
            <div class="table-row table-border">		
				<div class="table-data table-border-child align">Branded Lobby Walkthrus</div>
				<div class="table-data table-border-child">{props.three}</div>
				<div class="table-data table-border-child">$ {props.threecost}</div>
			
			</div>
            <div class="table-row table-border">		
				<div class="table-data table-border-child align">Customlobby Template</div>
				<div class="table-data table-border-child">{props.customlobby}</div>
				<div class="table-data table-border-child">$ {props.customlobbycost}</div>
			
			</div>
            <div class="table-row table-border">		
				<div class="table-data table-border-child align">Auditorium</div>
				<div class="table-data table-border-child">{props.auditorium}</div>
				<div class="table-data table-border-child">$ {props.auditoriumcost}</div>
			
			</div>
            <div class="table-row table-border  ">		
				<div class="table-data table-border-child  align ">Games</div>
				<div class="table-data table-border-child ">{props.games}</div>
				<div class="table-data table-border-child ">$ {props.gamescost}</div>
			
			</div>
            <div class="table-row table-border">		
				<div class="table-data table-border-child align">Photo Booth</div>
				<div class="table-data table-border-child">{props.booth}</div>
				<div class="table-data table-border-child">$ {props.boothcost}</div>
			
			</div>
            <div class="table-row table-border">		
				<div class="table-data table-border-child align">Tech Support</div>
				<div class="table-data table-border-child">{props.hour}</div>
				<div class="table-data table-border-child">$ {props.hourcost}</div>
			
			</div>
			<div class="table-row table-border">
				<div class="table-data table-border-child align"></div>
				<div class="table-data table-border-child"></div>
				<div class="table-data table-border-child totalcont">Total: ${props.total}</div>
			
			</div>
			
		</div>	
	</div>
</div>
    </div>)
}

export default Table;