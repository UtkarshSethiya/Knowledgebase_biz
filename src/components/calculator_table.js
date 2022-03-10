import './calculator_table.css'


function Table(props){
    console.log(props.attend)
    return(<div>

<div class="containertable">
	
	<div class="table">
		<div class="table-header">
			<div class="header__item "><a id="name" class="filter__link heading" >Features</a></div>
			<div class="header__item "><a id="wins" class="filter__link filter__link--number heading" >Quantity</a></div>
			<div class="header__item "><a id="draws" class="filter__link filter__link--number heading" >Cost</a></div>
		
		</div>
		<div class="table-content">	
          <div class="table-row table-border">		
				<div class="table-data table-border-child align align">Plan</div>
				<div class="table-data table-border-child ">Type:{props.plantype}</div>
				<div class="table-data table-border-child align">${props.plancost}</div>
			
			</div>
			<div class="table-row table-border alternate">		
				<div class="table-data table-border-child align align">Attendees Volume</div>
				<div class="table-data table-border-child ">{props.attend}</div>
				<div class="table-data table-border-child align">${props.attendcost}</div>
			
			</div>
            <div class="table-row table-border">		
				<div class="table-data table-border-child align align">Extra Booth</div>
				<div class="table-data table-border-child">{props.exhibitor}</div>
				<div class="table-data table-border-child align">${props.exhibitorcost}</div>
			
			</div>
            <div class="table-row table-border alternate">		
				<div class="table-data table-border-child align align">Custom Hall Template</div>
				<div class="table-data table-border-child ">{props.customhall}</div>
				<div class="table-data table-border-child align">${props.customhallcost}</div>
			
			</div>
            <div class="table-row table-border">		
				<div class="table-data table-border-child align align">Custom Booth Template</div>
				<div class="table-data table-border-child ">{props.custombooth}</div>
				<div class="table-data table-border-child align">${props.customboothcost}</div>
			
			</div>
            
            <div class="table-row table-border">		
				<div class="table-data table-border-child align align">White Label</div>
				<div class="table-data table-border-child ">{props.whitelabel}</div>
				<div class="table-data table-border-child align">${props.whitelabelcost}</div>
			
			</div>
            <div class="table-row table-border">		
				<div class="table-data table-border-child align align">Customlanding Template</div>
				<div class="table-data table-border-child ">{props.customlanding}</div>
				<div class="table-data table-border-child align">${props.customlandingcost}</div>
			
			</div>
            <div class="table-row table-border">		
				<div class="table-data table-border-child align align">Branded Lobby Walkthrus</div>
				<div class="table-data table-border-child ">{props.three}</div>
				<div class="table-data table-border-child align">${props.threecost}</div>
			
			</div>
            <div class="table-row table-border">		
				<div class="table-data table-border-child align align">Customlobby Template</div>
				<div class="table-data table-border-child ">{props.customlobby}</div>
				<div class="table-data table-border-child align">${props.customlobbycost}</div>
			
			</div>
            <div class="table-row table-border">		
				<div class="table-data table-border-child align align">Auditorium</div>
				<div class="table-data table-border-child ">{props.auditorium}</div>
				<div class="table-data table-border-child align">${props.auditoriumcost}</div>
			
			</div>
            <div class="table-row table-border  ">		
				<div class="table-data table-border-child align  align ">Games</div>
				<div class="table-data table-border-child  ">{props.games}</div>
				<div class="table-data table-border-child align ">${props.gamescost}</div>
			
			</div>
            <div class="table-row table-border">		
				<div class="table-data table-border-child align align">Photo Booth</div>
				<div class="table-data table-border-child">{props.booth}</div>
				<div class="table-data table-border-child align">${props.boothcost}</div>
			
			</div>
            <div class="table-row table-border">		
				<div class="table-data table-border-child align align">Tech Support</div>
				<div class="table-data table-border-child ">{props.hour}</div>
				<div class="table-data table-border-child align">${props.hourcost}</div>
			
			</div>
			<div class="table-row table-border">
				<div class="table-data table-border-child align align"></div>
				<div class="table-data table-border-child "></div>
				<div class="table-data table-border-child align totalcont">Total: ${props.total}</div>
			
			</div>
			
		</div>	
	</div>
</div>
    </div>)
}

export default Table;