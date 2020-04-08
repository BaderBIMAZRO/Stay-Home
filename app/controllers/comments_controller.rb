class CommentsController < ApplicationController
    def new
        @report = Report.find(params[:report_id])
        @comment = Comment.new
    end

    def create
        puts params
        report = Report.find(params[:comment][:report_id])
        Comment.create(params.require(:comment).permit(:content, :report_id))
        redirect_to report
    end
end
