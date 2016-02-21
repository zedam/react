var LinkBox = React.createClass({
    handleAddLink: function(url) {
        link = {url: url};

        $.ajax({
            type: 'POST',
            url: this.props.url,
            data: link,
            headers: {'X-CSRFToken': $.cookie('csrftoken')},
            success: function(data) {
                var links = this.state.data;
                //I do this so the new added link will be on top of the array
                var newLinks = [data].concat(links);
                this.setState({data: newLinks});
            }.bind(this)
        });
    },
    deleteObj: function(data_id) {
        var links = this.state.data;
        var newlinks = links.filter(function(elem) {
            return elem.id != data_id;
        });

        this.setState({data: newlinks});

        $.ajax({
            type: 'DELETE',
            url: '/api/links/' + data_id + '/',
            success: function() {
                //...
            }.bind(this),
            headers: {'X-CSRFToken': $.cookie('csrftoken')}
        });
    },
    loadLinksFromServer: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data) {
                this.setState({data: data});
            }.bind(this)
        });
    },
    getInitialState: function() {
        return {data: []};
    },
    componentWillMount: function() {
        this.loadLinksFromServer();
    },
    render: function() {
        return (
            <div>
                <h3>Links</h3>

                <LinkForm url={this.props.url} onSubmit={this.handleAddLink} />

                <LinkList data={this.state.data}
                          onDelete={this.deleteObj}
                />
            </div>
        )
    }
});

React.renderComponent(
    <LinkBox url={'/api/links/'}/>,
    document.getElementById('content')
);
